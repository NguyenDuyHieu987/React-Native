'use strict';

const util = require('util');
const mysql = require('mysql');
const db = require('../db');

module.exports = {
  get: (req, res) => {
    let sql = `SELECT * FROM products LIMIT 6 OFFSET ${req.query.offset}`;
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getType: (req, res) => {
    let sql = `SELECT danh_muc FROM products GROUP BY danh_muc`;
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getByType: (req, res) => {
    console.log(req.query.offset);
    console.log(req.query.type);

    let sql = `SELECT * FROM products WHERE danh_muc = '${req.query.type}' LIMIT 6 OFFSET ${req.query.offset}`;
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
};
