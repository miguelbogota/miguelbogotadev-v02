import { experienceAction } from '@app-lib/experience';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const rawParams = request.url.split('?')[1];

  if (!rawParams) {
    throw new Error('Missing `after` parameter.');
  }

  const params = new URLSearchParams(rawParams);

  if (!params.has('after')) {
    throw new Error('Missing `after` parameter.');
  }

  const after = params.get('after');
  const experiences = await experienceAction.loadMore(after ?? '');

  return NextResponse.json(experiences);
}
