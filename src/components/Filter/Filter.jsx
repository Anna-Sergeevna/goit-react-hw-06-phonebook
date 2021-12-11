import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label>
      <p className={s.text}>Find contacts by name</p>
      <input
        type='text'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        className={s.input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateProps, mapDispatchToProps)(Filter);
