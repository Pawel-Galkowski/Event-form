import {Router} from 'express';
import standardMailer from '../middleware/EventFormMailer.js';
import Data from '../models/Events.js';
import {
  check,
  validationResult,
} from 'express-validator';

const router = new Router();
router.post(
    '/eventForm',
    [
      check('name', 'Name is required').not().isEmpty(),
      check('surname', 'Surname is required').not().isEmpty(),
      check('email', 'Email is required').not().isEmpty(),
      check('date', 'Date is required').not().isEmpty(),
    ],
    async (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const {
        name,
        surname,
        email,
        formName,
        date,
      } = req.body;

      const register = new Data({
        name: name,
        surname: surname,
        email: email,
        eventName: formName,
        date: date,
      });
      try {
        const resEmail = standardMailer(req.body);
        await resEmail.then((value) => {
          return value;
        });
        await register.save();
        return res.json('Registration confirmed');
      } catch (err) {
        return res.status(400).json('Invalid  data');
      }
    },
);

router.get('/persons', async (req, res) => {
  try {
    const person = await Data.find({});

    if (!person) return res.status(400).json('No persons registered');

    res.json(person);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

router.delete('/removePerson', async (req, res) => {
  try {
    await Data.findOneAndRemove({
      email: req.body.email,
    });
    res.json('Person removed');
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

export default router;
