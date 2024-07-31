#!/usr/bin/env node
/**
 * Track progress and errors with Kue: Create the Job processor
 */
import kue from 'kue';

const blacklist = ['4153518780', '4153518781'];

// Create a queue instance
const queue = kue.createQueue();

function sendNotification(phoneNumber, message, job, done) {
  // Track job progress
  job.progress(0, 100);

  if (blacklist.includes(phoneNumber)) {
    done(new Error(`Phone number ${phoneNumber} is blacklisted`));
  } else {
    // Track progress to 50%
    job.progress(50, 100);
    console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
    // Simulate sending notification
    setTimeout(() => {
      // Notify Kue that the job is done
      done();
    }, 1000); // Simulated delay
  }
}

// Create the queue with concurrency of 2
queue.process('push_notification_code_2', 2, (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message, job, done);
});

