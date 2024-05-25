#!/usr/bin/env python3
"""Pagination helper function.
"""


def index_range(page, page_size):
    """
    Return a tuple of size two containing a start index and an end index
    corresponding to the range of indexes to return in a list for those
    particular pagination parameters.

    Parameters:
    - page (int): The current page number (1-indexed).
    - page_size (int): The number of items per page.

    Returns:
    - tuple: A tuple containing the start index and the end index.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
