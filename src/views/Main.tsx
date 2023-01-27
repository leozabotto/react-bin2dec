import React from 'react';

export default function Main() {
  return (
    <div>
      <header>
        <h1>Bin2Dec</h1>
        <h2>Convert your binary to decimal</h2>
      </header>

      <main>
        <div>
          <p>Type the binary number down below:</p>
          <input type="text" name="user-number" id="user-number" />
          <span>Invalid characters. Enter 0 or 1 only for a successful conversion.</span>

          <p>Result:</p>
          <p>21</p>
        </div>
      </main>

      <footer>
        <p>
          Developed by{' '}
          <a href="http://github.com/leozabotto" target="_blank" rel="noreferrer">
            Leonardo Zabotto
          </a>
        </p>
      </footer>
    </div>
  );
}
