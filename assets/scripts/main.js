document.addEventListener('DOMContentLoaded', () => {
  const consoleLogBtn = document.querySelector('#error-btns button:nth-child(1)');
  const consoleErrorBtn = document.querySelector('#error-btns button:nth-child(2)');
  const consoleCountBtn = document.querySelector('#error-btns button:nth-child(3)');
  const consoleWarnBtn = document.querySelector('#error-btns button:nth-child(4)');
  const consoleAssertBtn = document.querySelector('#error-btns button:nth-child(5)');
  const consoleClearBtn = document.querySelector('#error-btns button:nth-child(6)');
  const consoleDirBtn = document.querySelector('#error-btns button:nth-child(7)');
  const consoleDirXmlBtn = document.querySelector('#error-btns button:nth-child(8)');
  const consoleGroupStartBtn = document.querySelector('#error-btns button:nth-child(9)');
  const consoleGroupEndBtn = document.querySelector('#error-btns button:nth-child(10)');
  const consoleTableBtn = document.querySelector('#error-btns button:nth-child(11)');
  const startTimerBtn = document.querySelector('#error-btns button:nth-child(12)');
  const endTimerBtn = document.querySelector('#error-btns button:nth-child(13)');
  const consoleTraceBtn = document.querySelector('#error-btns button:nth-child(14)');
  const globalErrorBtn = document.querySelector('#error-btns button:nth-child(15)');

  consoleLogBtn.addEventListener('click', () => {
    console.log('This is a console.log() message.');
  });

  consoleErrorBtn.addEventListener('click', () => {
    console.error('This is a console.error() message.');
  });

  consoleCountBtn.addEventListener('click', () => {
    console.count('Count Button');
  });

  consoleWarnBtn.addEventListener('click', () => {
    console.warn('This is a console.warn() message.');
  });

  consoleAssertBtn.addEventListener('click', () => {
    console.assert(false, 'This assertion failed!');
    console.assert(true, 'This assertion will not log.');
  });

  consoleClearBtn.addEventListener('click', () => {
    console.clear();
  });

  const sampleTableData = [
    { make: 'Ford', model: 'Mustang', year: 2021 },
    { make: 'Tesla', model: 'Model 3', year: 2022 },
    { make: 'Toyota', model: 'Camry', year: 2023 },
  ];

  consoleDirBtn.addEventListener('click', () => {
    console.dir(sampleTableData[0]);
  });

  consoleDirXmlBtn.addEventListener('click', () => {
    console.dirxml(document.body);
  });

  consoleGroupStartBtn.addEventListener('click', () => {
    console.group('Button Demo Group');
    console.log('First message in the group');
  });

  consoleGroupEndBtn.addEventListener('click', () => {
    console.log('Last message in the group');
    console.groupEnd();
  });

  consoleTableBtn.addEventListener('click', () => {
    console.table(sampleTableData);
  });

  startTimerBtn.addEventListener('click', () => {
    console.time('demo-timer');
    console.log('Timer started.');
  });

  endTimerBtn.addEventListener('click', () => {
    console.timeEnd('demo-timer');
  });

  function trace() {
    console.trace('Here is a console.trace()');
  }

  consoleTraceBtn.addEventListener('click', () => {
    trace();
  });

  globalErrorBtn.addEventListener('click', () => {
    // This function does not exist and will cause a global error
    nonExistentFunction();
  });
});
