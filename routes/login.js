const express = require('express');
const router  = express.Router();



module.exports = (db) => {
  router.get("/login/users/:userid", (req, res) => {
    //set cookie
   req.session.user_id = req.params.userid;
   res.redirect('/');
  });
  return router;
};
