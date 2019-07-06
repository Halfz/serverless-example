import 'core-js/stable';
import 'regenerator-runtime/runtime';
import app from 'server/expressApp';



app.listen('3000', 'localhost', (err) => {
  console.log(err);
  return null;
});
