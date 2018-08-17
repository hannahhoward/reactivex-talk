int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow)
{
  MSG msg;
  BOOL bRet;

  while (1)
  {
    bRet = GetMessage(&msg, NULL, 0, 0);

    if (bRet > 0) // (bRet > 0 indicates a message that must be processed.)
    {
      TranslateMessage(&msg);
      DispatchMessage(&msg);
    }
    else if (bRet < 0) // (bRet == -1 indicates an error.)
    {
      // Handle or log the error; possibly exit.
      // ...
    }
    else // (bRet == 0 indicates "exit program".)
    {
      break;
    }
  }
  return msg.wParam;
}