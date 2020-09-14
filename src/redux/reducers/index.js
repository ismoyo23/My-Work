import {combineReducers} from 'redux';
// =============================================
// import from reducers auth
import auth from './auth';

import homeGet from './home/homeGet';
import getSkill from './skills/skillsGet';
import showHome from './home/showHome';
// export combine reducers
export default combineReducers({
  // =========================================//
  // export auth //
  auth,

  homeGet,

  showHome,

  getSkill,
});
