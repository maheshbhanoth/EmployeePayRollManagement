package com.employee_payroll.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Id;

//import org.springframework.data.annotation.Id;




@Entity
public class Attendance {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private LocalDate date;
	
	private String check_in;
	
	private String check_out;
	
	private String status;
	
	public Attendance() {
		super();
	}
	
	@ManyToOne
	@JoinColumn(name="employee_id")
	private Employee employee;

	public Attendance(LocalDate date, String check_in, String check_out, String status, Employee employee) {
		super();
		this.date = date;
		this.check_in = check_in;
		this.check_out = check_out;
		this.status = status;
		this.employee = employee;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getCheck_in() {
		return check_in;
	}

	public void setCheck_in(String check_in) {
		this.check_in = check_in;
	}

	public String getCheck_out() {
		return check_out;
	}

	public void setCheck_out(String check_out) {
		this.check_out = check_out;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	@Override
	public String toString() {
		return "Attendance [id=" + id + ", date=" + date + ", check_in=" + check_in + ", check_out=" + check_out
				+ ", status=" + status + ", employee=" + employee + "]";
	}
	
	
}










