import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function randomColor() {
  return Math.floor(Math.random() * 256);
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s['stat-list']}>
        {stats.map(stat => (
          <li
            className={s.item}
            key={stat.id}
            style={{
              backgroundColor: `rgb(${randomColor()},${randomColor()},${randomColor()} )`,
            }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default Statistics;
