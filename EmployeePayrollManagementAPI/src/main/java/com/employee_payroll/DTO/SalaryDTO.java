package com.employee_payroll.DTO;

import java.time.LocalDate;

public class SalaryDTO {

	private int id;
	private LocalDate salary_credited_date;
	private String amount;
	private int employee_id;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public LocalDate getSalary_credited_date() {
		return salary_credited_date;
	}
	public void setSalary_credited_date(LocalDate salary_credited_date) {
		this.salary_credited_date = salary_credited_date;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public int getEmployee_id() {
		return employee_id;
	}
	public void setEmployee_id(int i) {
		this.employee_id = i;
	}
	
	
	
}
