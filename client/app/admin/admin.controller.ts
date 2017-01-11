'use strict';

export default class AdminController {
  users: Object[];
  isAdmin: Function;

  /*@ngInject*/
  constructor(User, Auth) {
    // Use the User $resource to fetch all users
    this.users = User.query();
    
    this.isAdmin = Auth.isAdminSync;
  }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }
}
