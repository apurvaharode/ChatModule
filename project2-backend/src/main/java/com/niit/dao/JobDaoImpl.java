package com.niit.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.niit.model.Job;

@Repository
@Transactional
public class JobDaoImpl implements JobDao {
	@Autowired
	private SessionFactory sessionFactory;
	public void saveJob(Job job)
	{
		Session session =sessionFactory.getCurrentSession();
		session.save(job);
	}
	public List<Job>getAllJobs()
	{
		Session session=sessionFactory.getCurrentSession();
		Query query=session.createQuery("from job");
		List<Job>jobs=query.list();
		int size=jobs.size();
		System.out.println("NUMBER OF OBJECT IN THE JOB LIST" +size);
		return jobs;
	}
	public Job getJobById(int id) {
		// TODO Auto-generated method stub
		Session session=sessionFactory.getCurrentSession();
		Job job=(Job)session.get(Job.class, id);
		return job;
	}
	

}
