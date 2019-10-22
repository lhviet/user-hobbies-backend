import { Request } from 'hapi';

import { Hobby, User } from '../../models';

interface RequestUserPayload extends Request {
  payload: {
    name: string;
    avatarUrl?: string;
  }
}
export async function createUser(req: RequestUserPayload): Promise<object> {
  const { name, avatarUrl,  } = req.payload;
  try {
    // Create a new User
    const user = new User({ name, avatarUrl });
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
    if (off && typeof off === 'string') {
      offset = parseInt(off);
    }
    if (lim && typeof lim === 'string') {
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
  const { name, avatarUrl } = req.payload;
  try {
    const user: any = await User.findById(id);
    if (!name && !avatarUrl) {
      return user.toJSON();
    }

    if (name) {
      user.name = name;
    }

    if (avatarUrl) {
      user.avatarUrl = avatarUrl || user.avatarUrl;
    }

    return (await user.save()).toJSON();
  } catch (e) {
    return e;
  }
}

export async function deleteUser(req: Request): Promise<object> {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);

    // Delete dependent hobbies of this User also
    const hobbies = await Hobby.find({ user: id });
    hobbies.map(h => Hobby.findByIdAndDelete(h.id));

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
