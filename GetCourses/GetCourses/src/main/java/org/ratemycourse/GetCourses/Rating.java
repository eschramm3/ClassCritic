package org.ratemycourse.GetCourses;

public class Rating {

	private long id;
	private long courseId;
	private long userId;
	private int score;
	private int workload;
	private int difficulty;
	private String review;
	private boolean isAnonymous;

	public boolean isAnonymous() {
		return isAnonymous;
	}
	public void setAnonymous(boolean isAnonymous) {
		this.isAnonymous = isAnonymous;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		if (this.id == 0)
			this.id = id;
		else throw new UnsupportedOperationException("You cannot change the id once it has been set");
	}
	public long getCourseId() {
		return courseId;
	}
	public void setCourseId(long courseId) {
		if (this.courseId == 0)
			this.courseId = courseId;
		else throw new UnsupportedOperationException("You cannot change the id once it has been set");

	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		if (this.userId == 0)
			this.userId = userId;
		else throw new UnsupportedOperationException("You cannot change the id once it has been set");
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public int getWorkload() {
		return workload;
	}
	public void setWorkload(int workload) {
		this.workload = workload;
	}
	public int getDifficulty() {
		return difficulty;
	}
	public void setDifficulty(int difficulty) {
		this.difficulty = difficulty;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}




}
