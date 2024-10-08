import foodModel from "../model/food.model.js";
import fs from "fs";

const addFood = async (req, res) => {
  const imageName = `${req.file.filename}`;
  try {
    await foodModel.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: imageName,
    });
    res.json({
      success: true,
      message: "Food Added",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const getFoodList = async (req, res) => {
  let foodList;
  try {
    if (req.query.category === "All") {
      foodList = await foodModel.find();
    } else {
      foodList = await foodModel.find({ category: req.query.category });
    }
    console.log(foodList);
    res.json({
      success: true,
      message: "User Fetched",
      data: foodList,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlinkSync(`uploads/${food.image}`);
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({
      success: true,
      message: "Food Removed",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { addFood, getFoodList, removeFood };
