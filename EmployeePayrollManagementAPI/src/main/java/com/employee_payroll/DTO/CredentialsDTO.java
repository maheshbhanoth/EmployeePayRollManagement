package com.employee_payroll.DTO;

import com.employee_payroll.entities.Employee;

public class CredentialsDTO {

	private int id;
	private String password;
	private Employee employee_id;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Employee getEmployee_id() {
		return employee_id;
	}
	public void setEmployee_id(Employee employee_id) {
		this.employee_id = employee_id;
	}
	
	
	
}
