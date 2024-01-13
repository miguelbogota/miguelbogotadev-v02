import { experienceAction } from '@app-lib/experience';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const rawParams = request.url.split('?')[1];

  if (!rawParams) {
    const experiences = await experienceAction.getAll();
    return NextResponse.json(experiences);
  }

  const params = new URLSearchParams(rawParams);

  if (!params.has('after')) {
    const experiences = await experienceAction.getAll();
    return NextResponse.json(experiences);
  }

  const after = params.get('after');
  const experiences = await experienceAction.getAll(after ?? '');

  return NextResponse.json(experiences);
}
