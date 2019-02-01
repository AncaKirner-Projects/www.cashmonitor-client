import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import { currencies } from '../../../helpers/types';

class BudgetSettings extends Component {
  state = {}
  render() {
    return (
      <div>
        <Typography variant="h6" component="h6">
          Budget
        </Typography>
        <Card className="budget-card">
          <CardContent>
            <div className='budget-div'>
              <Typography variant="h6" className="crr-typo">
                Currency:
              </Typography>
              <FormControl variant="outlined" className='select-crr'>
                <Select
                  native
                  value={this.state.age}
                  onChange={this.handleChangeCurrency}
                  input={
                    <OutlinedInput
                      name="age"
                      labelWidth={this.state.labelWidth}
                      id="outlined-age-native-simple"
                    />
                  }
                >
                  <option value="">-- Select --</option>
                  { currencies && currencies.map((option, id) => (
                    <option key={id} value={option}>{option}</option>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className='budget-div'>
              <Typography variant="h6" className="budget-elem">
                Update:
              </Typography>
              <TextField
                placeholder="Insert New Real Budget"
                margin="normal"
                variant="outlined"
                onChange={(e) => this.handleChange(e)}
              />              
            </div>
            <div className='budget-div'>
              <Typography variant="h6" className="budget-elem">
                Calculated:
              </Typography>
              <TextField
                margin="normal"
                variant="outlined"
                disabled
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className='budget-div'>
              <Typography variant="h6" className="budget-elem">
                Difference:
              </Typography>
              <TextField
                margin="normal"
                variant="outlined"
                disabled
                onChange={(e) => this.handleChange(e)}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default BudgetSettings;