import { all, takeLatest } from 'redux-saga/effects';

import { Types as FileManagerTypes } from '../ducks/fileManager';
import { Types as PlayerTypes } from '../ducks/player';

import { downloadFile } from './fileManager';
import {
  shufflePlaylist, setPodcast, playNext, playPrevious,
} from './player';

export default function* rootSaga() {
  return yield all([
    takeLatest(FileManagerTypes.DOWNLOAD_FILE, downloadFile),
    takeLatest(PlayerTypes.SET_PODCAST_REQUEST, setPodcast),
    takeLatest(PlayerTypes.PLAY_NEXT_REQUEST, playNext),
    takeLatest(PlayerTypes.PLAY_PREVIOUS_REQUEST, playPrevious),
    takeLatest(PlayerTypes.SHUFFLE_PLAYLIST_REQUEST, shufflePlaylist),
  ]);
}
