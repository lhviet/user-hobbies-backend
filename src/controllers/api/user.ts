import { Request } from 'hapi';

import { Hobby, User } from '../../models';

interface RequestUserPayload extends Request {
  payload: {
    name: string;
  }
}
export async function createUser(req: RequestUserPayload): Promise<object> {
  const { name } = req.payload;
  try {
    // Create a new User
    const user = new User({ name });
    const newUser = await user.save();

    return newUser.toJSON();
  } catch (e) {
    return e;
  }
}

export async function getUsers(req: Request): Promise<any> {
  const { off, lim } = req.query;
  try {
    let offset = 0,
      limit = 30;
    if (typeof off === 'string' && typeof lim === 'string') {
      offset = parseInt(off);
      limit = parseInt(lim);
    }
    const users = await User.find().skip(offset).limit(limit);

    return users.map(u => u.toJSON());
  } catch (e) {
    return e;
  }
}

export async function updateUser(req: RequestUserPayload): Promise<object> {
  const { id } = req.params;
  const { name } = req.payload;
  try {
    const user: any = await User.findById(id);
    user.name = name;

    return (await user.save()).toJSON();
  } catch (e) {
    return e;
  }
}

export async function deleteUser(req: Request): Promise<object> {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);

    return user.toJSON();
  } catch (e) {
    return e;
  }
}

export async function getHobbies(req: Request): Promise<any> {
  const { id: user } = req.params;
  try {
    const hobbies = await Hobby.find({ user });

    return hobbies.map(h => h.toJSON());
  } catch (e) {
    return e;
  }
}
