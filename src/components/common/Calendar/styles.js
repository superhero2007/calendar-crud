import styled from 'styled-components';
import {Calendar} from 'react-big-calendar';

export const CalendarWrapper = styled.div`
`;

export const CalendarDate = styled.p`
  font-size: 28px;
  line-height: 28px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 18px;
`;

export const StyledCalendar = styled(Calendar)`
  & .rbc-time-view {
    border-color: ${props => props.theme.colors.black};

    & .rbc-time-header {
      display: none;
    }
    
    & .rbc-time-content {
      border-top: 0;
      
      & > * + * > *, & .rbc-events-container {
        border-left: 0;
      }
      
      & .rbc-day-slot {
        cursor: pointer;
      }
      
      & .rbc-current-time-indicator {
        background-color: transparent;
      }
      
      & .rbc-events-container {
        margin-left: 10px;
      
        & .rbc-event {
          background-color: ${props => props.theme.colors.pink};
          box-shadow: 3px 3px 3px 0px ${props => props.theme.colors.pink}50;
          border: 0;
          
          & .rbc-event-label {
            margin-bottom: 5px;
            font-size: 15px;
          }
        }
      }
      
      & .rbc-today {
        background-color: ${props => props.theme.colors.card};
      } 
      
      & .rbc-timeslot-group {
        border-bottom: 0;
        
        & .rbc-time-slot {
          border-top: 0;
          
          & .rbc-label {
            font-weight: 700;
          }
        }
      }
    }
  }
`;
