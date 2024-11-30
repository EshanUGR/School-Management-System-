import { Events } from "../models/eventsSchema.js";

export const createEvents = async (req, res, next) => {
  const {events } = req.body;

  try {
    if (!events ) {
      return next("Please Fill Full Form ", 400);
    }
    await Events.create({ events});
    res.status(200).json({
      success: true,
      message: "Event is Created!",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllEvents = async (req, res, next) => {
  try {
    const event = await Events.find();
    res.status(200).json({
      success: true,
      event,
    });
  } catch (error) {
    next(error);
  }
};
