import foodModel from "../model/food.model.js";
import fs from "fs";

const addFood = async (req, res) => {
  console.log(req.body);
  console.log(req.file);
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
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const getFoodList = async (req, res) => {
  try {
    const foodList = await foodModel.find();
    res.json({
      success: true,
      message: "User Fetched",
      data: foodList,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    console.log(food);
    fs.unlinkSync(`uploads/${food.image}`);

    await foodModel.findByIdAndDelete(req.body.id);

    res.json({
      success: true,
      message: "Food Removed",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { addFood, getFoodList, removeFood };
