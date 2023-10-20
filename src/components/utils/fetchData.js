let is_ok = true;

const fetchData = (time, task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        is_ok ? resolve(task) : reject('Error in the fetchData');
    }, time);
  });
}

export default fetchData;