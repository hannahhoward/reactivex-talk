LRESULT CALLBACK MainWndProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam) // second message parameter
{
  switch (uMsg)
  {
  case WM_CREATE:
    // Initialize the window.
    return 0;

  case WM_PAINT:
    // Paint the window's client area.
    return 0;

  case WM_SIZE:
    // Set the size and position of the window.
    return 0;

  case WM_DESTROY:
    // Clean up window-specific data objects.
    return 0;
  //
  // Process other messages.
  //
  default:
    return DefWindowProc(hwnd, uMsg, wParam, lParam);
  }
  return 0;
}