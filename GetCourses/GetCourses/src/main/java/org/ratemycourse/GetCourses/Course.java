package org.ratemycourse.GetCourses;

import java.util.ArrayList;
import java.util.Iterator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Course {

	@Id
	private long id;
	private String key;
	
	private char school;
	private String dept;
	private String number;
	private String name;
	private String description;
	private ArrayList<String> attrs;
	private ArrayList<Rating> ratings;
	private int sumOfScores;
	private int numScores;
	private double avgScore;

	public int getSumOfScores() {
		return sumOfScores;
	}
	public int getNumScores() {
		return numScores;
	}
	public double getAvgScore() {
		return avgScore;
	}
	public ArrayList<Rating> getRatings() {
		return ratings;
	}
	public void addRating(Rating r) {
		this.ratings.add(r);
		++this.numScores;
		this.sumOfScores += r.getScore();
		this.avgScore = this.sumOfScores / (double) this.numScores;
	}
	public void deleteRating(Rating r) {
		Iterator<Rating> ratingIterator = this.ratings.iterator();
		while (ratingIterator.hasNext()) {
			Rating currentRating = ratingIterator.next();
			if (currentRating.getId().equals(r.getId())) {
				currentRating.remove();
				--this.numScores;
				this.sumOfScores -= r.getScore();
				this.avgScore = this.sumOfScores / (double) this.numScores;
				continue;
			}
		}
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		if (this.id == 0)
			this.id = id;
		else throw new UnsupportedOperationException("You cannot change the id once it has been set");
	}
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		if (this.key.equals(""))
			this.key = key;
		else throw new UnsupportedOperationException("You cannot change the course key once it has been set");
	}
	public char getSchool() {
		return school;
	}
	public void setSchool(char school) {
		if (this.school == '\u0000')
			this.school = school;
		else throw new UnsupportedOperationException("You cannot change the school once it has been set");
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		if (this.dept.equals(""))
			this.dept = dept;
		else throw new UnsupportedOperationException("You cannot change the department once it has been set");
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		if (this.number.equals(""))
			this.number = number;
		else throw new UnsupportedOperationException("You cannot change the course number once it has been set");
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		if (this.name.equals(""))
		this.name = name;
		else throw new UnsupportedOperationException("You cannot change the name once it has been set");
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public ArrayList<String> getAttrs() {
		return attrs;
	}
	public void setAttrs(String[] attrs) {
		this.attrs = new ArrayList<>(attrs.length);
		for (String a : attrs) {
			this.attrs.add(a);
		}
	}

}
