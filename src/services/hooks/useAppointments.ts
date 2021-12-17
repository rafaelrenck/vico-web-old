import { useQuery } from 'react-query';

import { api } from '../../services/api';

export function useAppointments(filter) {
  return useQuery("appointments", async () => {
    const { data } = await api.get(`sigh/appointments?insurance=${encodeURIComponent(filter.insurance)}&month=${encodeURIComponent(filter.month)}&amb=${encodeURIComponent(filter.amb)}&ext=${encodeURIComponent(filter.ext)}&int=${encodeURIComponent(filter.int)}&invoice=${encodeURIComponent(filter.invoice)}&patient=${encodeURIComponent(filter.patient)}`);
    return data;
  });
}