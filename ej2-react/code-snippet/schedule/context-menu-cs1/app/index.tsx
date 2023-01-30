{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend, closest, isNullOrUndefined, remove, removeClass } from '@syncfusion/ej2-base';
import { Query, DataManager } from '@syncfusion/ej2-data';
import {
  ScheduleComponent, ViewsDirective, ViewDirective, CellClickEventArgs,
  Day, Week, WorkWeek, Month, Agenda, Inject
} from '@syncfusion/ej2-react-schedule';
import { BeforeOpenCloseMenuEventArgs, MenuEventArgs, MenuItemModel, ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import { scheduleData } from './datasource';

function App() {
  let scheduleObj: ScheduleComponent;
  let menuObj: ContextMenuComponent;
  let eventObj: { [key: string]: Object };
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  let selectedTarget: Element;
  const menuItems: MenuItemModel[] = [
    {
      text: 'New Event',
      iconCss: 'e-icons new',
      id: 'Add'
    }, {
      text: 'New Recurring Event',
      iconCss: 'e-icons recurrence',
      id: 'AddRecurrence'
    }, {
      text: 'Today',
      iconCss: 'e-icons today',
      id: 'Today'
    }, {
      text: 'Edit Event',
      iconCss: 'e-icons edit',
      id: 'Save'
    }, {
      text: 'Edit Event',
      id: 'EditRecurrenceEvent',
      iconCss: 'e-icons edit',
      items: [{
        text: 'Edit Occurrence',
        id: 'EditOccurrence'
      }, {
        text: 'Edit Series',
        id: 'EditSeries'
      }]
    }, {
      text: 'Delete Event',
      iconCss: 'e-icons delete',
      id: 'Delete'
    }, {
      text: 'Delete Event',
      id: 'DeleteRecurrenceEvent',
      iconCss: 'e-icons delete',
      items: [{
        text: 'Delete Occurrence',
        id: 'DeleteOccurrence'
      }, {
        text: 'Delete Series',
        id: 'DeleteSeries'
      }]
    }
  ];

  function onMenuItemSelect(args: MenuEventArgs): void {
    let selectedMenuItem: string = args.item.id;
    if (selectedTarget.classList.contains('e-appointment')) {
      eventObj = scheduleObj.getEventDetails(selectedTarget) as { [key: string]: Object };
    }
    switch (selectedMenuItem) {
      case 'Today':
        scheduleObj.selectedDate = new Date();
        break;
      case 'Add':
      case 'AddRecurrence':
        let selectedCells: Element[] = scheduleObj.getSelectedElements();
        let activeCellsData: CellClickEventArgs =
          scheduleObj.getCellDetails(selectedCells.length > 0 ? selectedCells : selectedTarget);
        if (selectedMenuItem === 'Add') {
          scheduleObj.openEditor(activeCellsData, 'Add');
        } else {
          scheduleObj.openEditor(activeCellsData, 'Add', null, 1);
        }
        break;
      case 'Save':
      case 'EditOccurrence':
      case 'EditSeries':
        if (selectedMenuItem === 'EditSeries') {
          eventObj = new DataManager(scheduleObj.eventsData).executeLocal(new Query().where(scheduleObj.eventFields.id,
            'equal', eventObj[scheduleObj.eventFields.recurrenceID] as string | number))[0] as { [key: string]: Object };
        }
        scheduleObj.openEditor(eventObj, selectedMenuItem);
        break;
      case 'Delete':
        scheduleObj.deleteEvent(eventObj);
        break;
      case 'DeleteOccurrence':
      case 'DeleteSeries':
        scheduleObj.deleteEvent(eventObj, selectedMenuItem);
        break;
    }
  }

  function onContextMenuBeforeOpen(args: BeforeOpenCloseMenuEventArgs): void {
    let newEventElement: HTMLElement = document.querySelector('.e-new-event') as HTMLElement;
    if (newEventElement) {
      remove(newEventElement);
      removeClass([document.querySelector('.e-selected-cell')], 'e-selected-cell');
    }
    scheduleObj.closeQuickInfoPopup();
    let targetElement: HTMLElement = args.event.target as HTMLElement;
    if (closest(targetElement, '.e-contextmenu')) {
      return;
    }
    selectedTarget = closest(targetElement, '.e-appointment,.e-work-cells,' +
      '.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells');
    if (isNullOrUndefined(selectedTarget)) {
      args.cancel = true;
      return;
    }
    if (selectedTarget.classList.contains('e-appointment')) {
      eventObj = scheduleObj.getEventDetails(selectedTarget) as { [key: string]: Object };
      if (eventObj.RecurrenceRule) {
        menuObj.showItems(['EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
        menuObj.hideItems(['Add', 'AddRecurrence', 'Today', 'Save', 'Delete'], true);
      } else {
        menuObj.showItems(['Save', 'Delete'], true);
        menuObj.hideItems(['Add', 'AddRecurrence', 'Today', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
      }
      return;
    }
    menuObj.hideItems(['Save', 'Delete', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
    menuObj.showItems(['Add', 'AddRecurrence', 'Today'], true);
  }
  return (
    <div className='schedule-control-section'>
      <div className='control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent height='550px' ref={t => scheduleObj = t} selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }}>
            <ViewsDirective>
              <ViewDirective option='Day' />
              <ViewDirective option='Week' />
              <ViewDirective option='WorkWeek' />
              <ViewDirective option='Month' />
              <ViewDirective option='Agenda' />
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </div>
      </div>
      <ContextMenuComponent cssClass='schedule-context-menu' ref={menu => menuObj = menu} target='.e-schedule' items={menuItems} beforeOpen={onContextMenuBeforeOpen} select={onMenuItemSelect} />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


{% endraw %}