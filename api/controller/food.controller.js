import foodModel from "../model/food.model.js";

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
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { addFood };
