
const PowerShell = require('powershell')

module.exports = exports = () => {
  return new Promise((resolve, reject) => {
    // Turn display off by calling WindowsAPI.
    // SendMessage(HWND_BROADCAST,WM_SYSCOMMAND, SC_MONITORPOWER, POWER_OFF)
    // HWND_BROADCAST  0xffff
    // WM_SYSCOMMAND   0x0112
    // SC_MONITORPOWER 0xf170
    // POWER_OFF       0x0002
    const ps = new PowerShell(`
    Add-Type -TypeDefinition '
    using System;
    using System.Runtime.InteropServices;

    namespace Utilities {
      public static class Display
      {
          [DllImport("user32.dll", CharSet = CharSet.Auto)]
          private static extern IntPtr SendMessage(
            IntPtr hWnd,
            UInt32 Msg,
            IntPtr wParam,
            IntPtr lParam
          );

          public static void PowerOff ()
          {
            SendMessage(
                (IntPtr)0xffff, // HWND_BROADCAST
                0x0112,         // WM_SYSCOMMAND
                (IntPtr)0xf170, // SC_MONITORPOWER
                (IntPtr)0x0002  // POWER_OFF
            );
          }
      }
    }
    '
    [Utilities.Display]::PowerOff()
    `)

    // Handle process errors (e.g. powershell not found)
    ps.on('error', err => {
      reject(err)
    })

    // Stdout
    ps.on('output', data => {
      // console.log(data)
    })

    // Stderr
    ps.on('error-output', data => {
      reject(data)
    })

    // Process exited
    ps.on('end', exitcode => {
      resolve(exitcode)
    })
  })
}
