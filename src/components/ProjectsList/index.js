import React, { useState } from 'react';
import styles from './styles/projects.module.css';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: '8px'
  },
  gridItem: {
    border: '1px solid black',
    borderRadius: '3px',
    overflow: 'hidden',
    boxShadow: '0 0 4px blueviolet',
  },
}))

const projectUrls = [
  {
    id: 1,
    project_name: 'To-do лист',
    project_url: 'https://emir507.github.io/to-do',
    project_img: '/images/todo-list.png',
    project_code: 'https://github.com/Emir507/to-do'
  },
  {
    id: 2,
    project_name: 'Сеть быстрого питания',
    project_url: 'https://emir507.github.io/Burgers/',
    project_img: '/images/fastfood.png',
    project_code: 'https://github.com/Emir507/burgers'
  },
  {
    id: 3,
    project_name: 'Ресторан',
    project_url: 'https://emir507.github.io/hunger/',
    project_img: '/images/restaurant.png',
    project_code: 'https://github.com/Emir507/hunger'
  },
  {
    id: 4,
    project_name: 'Коворкинг',
    project_url: 'https://emir507.github.io/week-2/',
    project_img: '/images/coworking.png',
    project_code: 'https://github.com/Emir507/week-2'
  },
  {
    id: 5,
    project_name: 'База данных кино',
    project_url: 'https://movies-database.vercel.app',
    project_img: '/images/movies.png',
    project_code: 'https://github.com/Emir507/movies-database'
  },
  {
    id: 6,
    project_name: 'Игра Simon-game',
    project_url: 'https://emir507.github.io/simon-game',
    project_img: '/images/simon-game.png',
    project_code: 'https://github.com/Emir507/simon-game-code-review'
  },
  {
    id: 7,
    project_name: 'Форма для клиента',
    project_url: 'https://emir507.github.io/vue-form',
    project_img: '/images/client-form.png',
    project_code: 'https://github.com/Emir507/vue-form-code-review'
  },
  {
    id: 8,
    project_name: 'Приватный аккаунт',
    project_url: 'https://emir507.github.io/private-account',
    project_img: '/images/private-account.png',
    project_code: 'https://github.com/Emir507/private-account-code-review'
  },
]

function ProjectsList() {
  const [projects, ] = useState(projectUrls);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </Grid>
    </div>
  )
}

function Project({ project }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div className={`${classes.gridItem} pb-2 p-lg-0`}>
        <h6 className='d-lg-none m-1'>{project.project_name}</h6>
        <div className={`position-relative ${styles.project_info} mb-2 m-lg-0`}>
          <img src={project.project_img} alt={`${project.project_name}_pic`} />
          <div className={`${styles.project_name} d-none d-lg-flex flex-column justify-content-center align-items-center`}>
            <p>{project.project_name}</p>
            <div>
              <a href={`${project.project_url}`} className='btn btn-primary mr-1'>DEMO</a>
              <a href={`${project.project_code}`} className='btn btn-warning'>Review</a>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center d-lg-none'>
          <a href={`${project.project_url}`} className='btn btn-primary mr-1'>DEMO</a>
          <a href={`${project.project_code}`} className='btn btn-warning'>Review</a>
        </div>
      </div>
    </Grid>
  )
}

export default ProjectsList;