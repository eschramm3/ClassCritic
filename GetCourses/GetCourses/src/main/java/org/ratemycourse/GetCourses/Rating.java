package org.ratemycourse.GetCourses;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Rating {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	@ManyToOne(optional=false, fetch=FetchType.LAZY)
	@NotFound(action = NotFoundAction.IGNORE)
	@JsonManagedReference
	private UniqueCourse uniqueCourse = new UniqueCourse();
	private String userId;
	private int score;
	private int workload;
	private int difficulty;
	private int content;
	private int grading;
	private String review;
	private boolean isAnonymous;
	private String semTaken;

	public Rating() {}

	public Rating(UniqueCourse uniqCourse, String userId, int score, int workload, int difficulty, 
			int grading, int content, String review, boolean isAnonymous, String semTaken) {
		this.uniqueCourse = uniqCourse;
		this.userId = userId;
		this.score = score;
		this.workload = workload;
		this.difficulty = difficulty;
		this.content = content;
		this.grading = grading;
		this.review = review;
		this.isAnonymous = isAnonymous;
		this.semTaken = semTaken;
	}



	public boolean isAnonymous() {
		return this.isAnonymous;
	}
	public void setAnonymous(boolean isAnonymous) {
		this.isAnonymous = isAnonymous;
	}
	public long getId() {
		return this.id;
	}
	public void setId(long id) {
		if (this.id == 0)
			this.id = id;
		else throw new UnsupportedOperationException("You cannot change the id once it has been set");
	}
	public UniqueCourse getUniqueCourse() {
		return this.uniqueCourse;
	}
	public void setUniqueCourse(UniqueCourse course) {
		if (this.uniqueCourse == null)
			this.uniqueCourse = course;
		else throw new UnsupportedOperationException("You cannot change the course once it has been set");

	}
	public String getUserId() {
		return this.userId;
	}
	public void setUserId(String userId) {
		if (this.userId == null)
			this.userId = userId;
		else throw new UnsupportedOperationException("You cannot change the id once it has been set");
	}
	public int getScore() {
		return this.score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public int getWorkload() {
		return this.workload;
	}
	public void setWorkload(int workload) {
		this.workload = workload;
	}
	public int getDifficulty() {
		return this.difficulty;
	}
	public void setDifficulty(int difficulty) {
		this.difficulty = difficulty;
	}
	public String getReview() {
		return this.review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	public String getSemTaken() {
		return this.semTaken;
	}
	public void setSemTaken(String semTaken) {
		this.semTaken = semTaken;
	}
	public int getContent() {
		return content;
	}
	public void setContent(int content) {
		this.content = content;
	}
	public int getGrading() {
		return grading;
	}
	public void setGrading(int grading) {
		this.grading = grading;
	}

}
