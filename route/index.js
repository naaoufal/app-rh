const express = require('express');
const router = express.Router();

const entreprises = require('./db.json');

router.get('/', (req, res) => {
  res.json(entreprises);
});

router.post('/', (req, res) => {
  console.log(req.body);
  var  {name}  = req.body;
  var  {local}  = req.body;
  entreprises.push({
    id: entreprises.length + 1,
    name ,
    local 
  });
  res.json('Successfully created');
});

router.put('/:id', (req, res) => {
  console.log(req.body, req.params)
  var { id } = req.params;
  var { name } = req.body;
  var { local } = req.body;

  entreprises.forEach((product, i) => {
    if (product.id == id) {
      product.name = name;
      product.local = local;
    }
  });
  res.json('Successfully updated');

});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  entreprises.forEach((product, i) => {
    if(product.id == id) {
      entreprises.splice(i, 1);
    }
  });
  res.json('Successfully deleted');
});

module.exports = router;