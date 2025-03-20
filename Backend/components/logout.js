function logout(req, res) {
  res.clearCookie("token", {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });

  return res.status(200).json({ message: "Logged out successfully" });
}

export default logout;
