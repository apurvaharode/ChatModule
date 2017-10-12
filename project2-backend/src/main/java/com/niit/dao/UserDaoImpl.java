package com.niit.dao;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.niit.model.User;

@Repository
@Transactional
public class UserDaoImpl implements UserDao {
	@Autowired
	private SessionFactory sessionFactory;
	public void registration(User user)
	{
		Session session=sessionFactory.getCurrentSession();
		session.save(user);
	}
	public boolean isEmailValid(String email)
	{
		Session session=sessionFactory.getCurrentSession();
		Query query=session.createQuery("from User where email=?");
		query.setString(0, email);
		User user=(User)query.uniqueResult();
		if(user==null)
			return true;
		else
			return false;
	}
	
	public boolean isUsernameValid(String username) {
		// TODO Auto-generated method stub
		Session session=sessionFactory.getCurrentSession();
		User user=(User)session.get(User.class,username );
		if(user==null)
			return true;
		else
		return false;
	}
	public User login(User user)
	{
		Session session=sessionFactory.getCurrentSession();
		Query query=session.createQuery("from User where username=? and password=?");
		query.setString(0, user.getUsername());
		query.setString(1, user.getPassword());
		return(User)query.uniqueResult();
	}
	public void updateUser(User validUser)
	{
		Session session=sessionFactory.getCurrentSession();
		session.update(validUser);
	}
	public User getUserByUsername(String username)
	{
		Session session=sessionFactory.getCurrentSession();
		User user=(User)session.get(User.class, username);
		return user;
	}
	

}
