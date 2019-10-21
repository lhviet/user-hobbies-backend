import { Request } from 'hapi';

import { Hobby } from '../../models';

interface RequestHobbyPayload extends Request {
  payload: {
    name: string;
    passionLevel: number;
    year: number;
    userId: string;
  }
}

export async function createHobby(req: RequestHobbyPayload): Promise<object> {
  const { name, passionLevel, year, userId: user } = req.payload;

  try {
    const hobby = new Hobby({
      name, passionLevel, year, user,
    });
    const newHobby = await hobby.save();
    return newHobby.toJSON();
  } catch (e) {
    return e;
  }
}

export async function getHobby(req: Request): Promise<object> {
  const { id } = req.params;
  try {
    const hobby = await Hobby.findById(id).populate('user');

    return hobby.toJSON();
  } catch (e) {
    return e;
  }
}

export async function updateHobby(req: RequestHobbyPayload): Promise<object> {
  const { id } = req.params;
  const { name, passionLevel, year } = req.payload;
  try {
    const hobby: any = await Hobby.findById(id);
    hobby.name = name || hobby.name;
    hobby.passionLevel = passionLevel || hobby.passionLevel;
    hobby.year = year || hobby.year;

    return (await hobby.save()).toJSON();
  } catch (e) {
    return e;
  }
}

export async function deleteHobby(req: Request): Promise<object> {
  const { id } = req.params;
  try {
    const hobby = await Hobby.findByIdAndDelete(id);

    return hobby.toJSON();
  } catch (e) {
    return e;
  }
}
