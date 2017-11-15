package org.ratemycourse.GetCourses;

public class User {

	private long userId;
	private String username;
	private String email;
	
	public User() {}
	
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		if (this.userId == 0)
			this.userId = userId;
		else throw new UnsupportedOperationException("You cannot change the id once it has been set");
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {		
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
}