import api from './apiConfig'
import jwtDecode from 'jwt-decode'

// router.get('/account/:username', controllers.oneUser)
export const oneUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json(user);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

//router.get('/usernames', controllers.getAllUsernames);
export const getAllUsernames = async (req, res) => {
  try {
    const users = await User.find({}, { username: 1, _id: 0 }); // find all users, only return the username field
    const usernames = users.map((user) => user.username); // extract the usernames from the returned array of user objects
    res.status(200).json({ usernames });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// router.delete("/users", controllers.deleteAllUsers);
export const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany({});
    res.status(200).json({ message: "All users have been deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
// router.delete("/users/:username", controllers.deleteUserByUsername);
export const deleteUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOneAndDelete({ username: username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// router.post('/sign-up', controllers.signUp)
export const signUp = async (credentials) => {
  try {
    const resp = await api.post('/sign-up', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

// router.post('/sign-in', controllers.signIn)
export const signIn = async (credentials) => {
  try {
    const resp = await api.post('/sign-in', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signOut = async () => {
  try {
    localStorage.removeItem("token")
    return true
  } catch (error) {
    throw error
  }
}

// router.post('/change-password', controllers.changePassword)
export const changePassword = async (passwords, user) => {
  try {
    const resp = await api.post('/')
    return resp.data
  } catch (error) {
    throw error
  }
}

// router.get('/verify', controllers.verify)
export const verifyUser = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    const res = await api.get('/verify')
    return res.data
  }
  return false
}
