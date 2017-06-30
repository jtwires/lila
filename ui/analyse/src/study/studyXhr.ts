const headers = {
  'Accept': 'application/vnd.lichess.v2+json'
};

export function reload(baseUrl: string, id: string, chapterId?: string) {
  let url = '/' + baseUrl + '/' + id;
  if (chapterId) url += '/' + chapterId;
  return $.ajax({
    url: url,
    headers: headers
  });
}

export function variants() {
  return $.ajax({
    url: '/variant',
    headers: headers,
    cache: true
  });
}

export function glyphs() {
  return $.ajax({
    url: '/glyphs',
    headers: headers,
    cache: true
  });
}

export function chapterConfig(studyId: string, chapterId: string) {
  return $.ajax({
    url: ['/study', studyId, chapterId, 'meta'].join('/'),
    headers: headers
  });
}

export function practiceComplete(chapterId: string, nbMoves: number) {
  return $.ajax({
    method: 'POST',
    url: ['/practice/complete', chapterId, nbMoves].join('/'),
    headers: headers
  });
}
