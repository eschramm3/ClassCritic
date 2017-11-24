package org.ratemycourse.GetCourses;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;

@Entity
public class UniqueCourse {

	@Id
	private long id;
	private long sumOfScores;
	private long numScores;
	private double avgScore;
	@OneToMany(mappedBy="parent", fetch=FetchType.LAZY)
	@JsonBackReference
	private Set<Course> sames;
	@OneToMany(mappedBy="uniqueCourse", fetch=FetchType.LAZY)
	@JsonBackReference
	private List<Rating> ratings;
	private String main;
	
	public UniqueCourse() {}
	
	public UniqueCourse(long id, Collection<Course> sames) {
		this.id = id;
		this.sumOfScores = 0;
		this.numScores = 0;
		this.avgScore = 0;
		this.sames = new HashSet<>(sames);
		for (Course s : sames) {
			s.setParent(this);
		}
		this.ratings = new ArrayList<>();
		this.main = "";
	}

	public long getId() {
		return this.id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getSumOfScores() {
		return this.sumOfScores;
	}
	public void setSumOfScores(long sumOfScores) {
		this.sumOfScores = sumOfScores;
	}
	public long getNumScores() {
		return this.numScores;
	}
	public void setNumScores(long numScores) {
		this.numScores = numScores;
	}
	public double getAvgScore() {
		return this.avgScore;
	}
	public void setAvgScore(double avgScore) {
		this.avgScore = avgScore;
	}
	public Set<Course> getSames() {
		return this.sames;
	}
	public void setSames(Set<Course> sames) {
		this.sames = new HashSet<>(sames);
		for (Course s : sames) {
			s.setParent(this);
		}
	}
	public void addSame(Course same) {
		this.sames.add(same);
		same.setParent(this);
	}
	public List<Rating> getRatings() {
		return this.ratings;
	}
	public void setRatings(List<Rating> r) {
		this.ratings = new ArrayList<>(r);
		for (Rating rating : r) {
			rating.setUniqueCourse(this);
		}
	}
	public void addRating(Rating r) {
		this.ratings.add(r);
		if (r.getUniqueCourse() == null)
			r.setUniqueCourse(this);
		++this.numScores;
		this.sumOfScores += r.getScore();
		this.avgScore = this.sumOfScores / (double) this.numScores;
	}
	public void deleteRating(Rating r) {
		this.ratings.remove(r);
	}
	
	public String getMain() {
		return main;
	}

	public void setMain(String main) {
		this.main = main;
	}
	
	
}
