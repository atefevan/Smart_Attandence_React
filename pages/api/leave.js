import { connectDb } from "./db";
import Leave from "./models/leave";
import errorHandler from "./utilities/errorHandler";

export default async function handler(req, res) {
  console.log(req.body);
  try {
    await connectDb();
    console.log(req.body);
    switch (req.method) {
      case "POST":
        const result = await Leave.create({ ...req.body });
        res.status(200).json({ message: "Leave Applied Successfully" });
        break;

      case "GET":
        const data = await Leave.aggregate([
          {
            $lookup: {
              from: 'users',
              localField: 'id',
              foreignField: 'id',
              as: 'user'
            }
          },
          // {
          //   $unwind: '$user'
          // },
          // {
          //   $project: {
          //     _id: 0,
          //     userName: '$user.name'
          //   }
          // }
        ])
        res.status(200).json(data);
        break;
    }
  } catch (error) {
    res.status(500).json(errorHandler(error));
  }
}