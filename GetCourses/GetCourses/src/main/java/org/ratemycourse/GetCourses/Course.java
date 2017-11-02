package org.ratemycourse.GetCourses;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity // This tells Hibernate to make a table out of this class
public class Course {

	@Id
	private long id;
	private String crsKey;
	private String school;
	private String dept;
	private String number;
	private String name;
	@Column(columnDefinition = "TEXT")
	private String description;
	@ElementCollection(targetClass=String.class)
	private Set<String> attrs;
	@OneToMany(targetEntity=Rating.class, mappedBy="course", fetch=FetchType.EAGER)
	private List<Rating> ratings;
	private int sumOfScores;
	private int numScores;
	private double avgScore;
	
	public Course() {}

	public Course(long id, String key, String school, String dept, String number, String name, String description,
			Set<String> attrs) {
		this.id = id;
		this.crsKey = key;
		this.school = school;
		this.dept = dept;
		this.number = number;
		this.name = name;
		this.description = description;
		this.attrs = attrs;
		this.ratings = new ArrayList<>();
		this.sumOfScores = 0;
		this.numScores = 0;
		this.avgScore = 0;
	}
	public int getSumOfScores() {
		return sumOfScores;
	}
	public int getNumScores() {
		return numScores;
	}
	public double getAvgScore() {
		return avgScore;
	}
	public List<Rating> getRatings() {
		return ratings;
	}
	public void addRating(Rating r) {
		this.ratings.add(r);
		++this.numScores;
		this.sumOfScores += r.getScore();
		this.avgScore = this.sumOfScores / (double) this.numScores;
	}
	public void deleteRating(Rating r) {
		// TODO
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
		return crsKey;
	}
	public void setKey(String key) {
		if (this.crsKey.equals(""))
			this.crsKey = key;
		else throw new UnsupportedOperationException("You cannot change the course key once it has been set");
	}
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		if (this.school == null)
			this.school = school;
		else throw new UnsupportedOperationException("You cannot change the school once it has been set");
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		if (this.dept == null)
			this.dept = dept;
		else throw new UnsupportedOperationException("You cannot change the department once it has been set");
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		if (this.number == null)
			this.number = number;
		else throw new UnsupportedOperationException("You cannot change the course number once it has been set");
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		if (this.name == null)
		this.name = name;
		else throw new UnsupportedOperationException("You cannot change the name once it has been set");
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Set<String> getAttrs() {
		return attrs;
	}
	public void setAttrs(String[] attrs) {
		this.attrs = new HashSet<>(attrs.length);
		for (String a : attrs) {
			this.attrs.add(a);
		}
	}

}
