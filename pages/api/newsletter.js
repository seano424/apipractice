import { MongoClient } from "mongodb";

import fs from 'fs'
import path from 'path'

export function buildUsersPath() {
  return path.join(process.cwd(), 'data', 'users.json')
}

export function extractUsers(filePath) {
  const fileData = fs.readFileSync(filePath)
  const data = JSON.parse(fileData)
  return data
}


async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const name = req.body.name

    const newSubmission = {
      id: new Date().toISOString,
      email,
      name
    }

    const filePath = buildUsersPath()
    const data = extractUsers(filePath)
    data.push(newSubmission)
    fs.writeFileSync(filePath, JSON.stringify(data))

    console.log(email);

    const client = await MongoClient.connect(
      "mongodb+srv://sean:vL5Md0DXfGLO3FRH@cluster0.bkrtk.mongodb.net/newsletter?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("emails").insertOne({ email });

    client.close()

    res.status(201).json({ message: "Successfully Submitted sign" });
  }
}

export default handler;
