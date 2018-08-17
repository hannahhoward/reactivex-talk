#define BYTE unsigned char
#define NUM_SCAN_QUE 256 // this MUST be 256, using BYTE roll-over for \
                         // q code
BYTE gb_scan;
BYTE gb_scan_q[NUM_SCAN_QUE];
BYTE gb_scan_head;
BYTE gb_scan_tail;

static void interrupt(far *oldkb)(void); /* BIOS keyboard handler */

/* ---------------------- get_scan() --------------------- April 17,1993 */
void interrupt get_scan(void)
{
  /* read the scan code from the keyboard */
  // ... 80x86 assembler code goes here!
  // save the raw scan code in a 256 byte buffer
  *(gb_scan_q + gb_scan_tail) = gb_scan;
  ++gb_scan_tail;
}

/* save the old int9 ISR vector, and install our own */
void init_keyboard(void)
{
  /* save old BIOS key board handler */
  oldkb = getvect(9);
  /* install our own handler */
  setvect(9, get_scan);
}

/* restore the bios keyboard handler */
void deinit_keyboard(void)
{
  setvect(9, oldkb);
}

// main loop
void main(void)
{
  int done = 0;
  event_t event;

  init_keyboard();
  while (!done)
  {
    if (check_input(&event))
    { /* ... */
    }
  }
  deinit_keyboard();
}

void interrupt bad_interrupt(void)
{
  /* Imma let you finish... */
  while (1 < 2)
  {
  }
}
