class TicketManagementSystem {
  constructor() {
      this.tickets = {};
  }

  generateUniqueId() {
      return Date.now().toString() + Math.random().toString(36).substring(2, 9);
  }

  sellTicket(journeyId, price) {
      const transId = this.generateUniqueId();
      this.tickets[transId] = { journeyId, price, isGroup: false, groupTransIds: [], isMerged: false };
      return transId;
  }

  refundTicket(transId) {
      if (this.tickets[transId]) {
          delete this.tickets[transId];
          return true;
      }
      return false;
  }

  getTransactionInfo(transId) {
      return this.tickets[transId] || null;
  }

  sellGroupTicket(journeyId, numTickets, pricePerTicket) {
      const transIds = [];
      for (let i = 0; i < numTickets; i++) {
          const transId = this.sellTicket(journeyId, pricePerTicket);
          this.tickets[transId].isGroup = true;
          transIds.push(transId);
      }
      for (const transId of transIds) {
          this.tickets[transId].groupTransIds = transIds;
      }
      return transIds;
  }

  totalSales() {
      return Object.values(this.tickets).reduce((sum, ticket) => sum + ticket.price, 0);
  }

  journeySalesSummary() {
      const summary = {};
      for (const ticket of Object.values(this.tickets)) {
          const journeyId = ticket.journeyId;
          summary[journeyId] = (summary[journeyId] || 0) + 1;
      }
      return summary;
  }

  // TODO: Implement the mergeTickets method to merge multiple tickets into a single ticket entity.
  mergeTickets(transIds) {
      // Implementation here
      const tickets = transIds.map(id => this.tickets[id]);
      const journeyIds = tickets.map(ticket => ticket.journeyId);
      console.log('journeyIds', journeyIds)
      const sameJourneyIds = journeyIds.every((item) => item === journeyIds[0])
      
      console.log('sameJourneyIds', sameJourneyIds)
      
      if (!sameJourneyIds) {
          return false;
      }
      
      const firstTicket = tickets[0]
      
      const newTicket = {
          journeyId: firstTicket.journeyId,
          isGroup: firstTicket.isGroup,
          groupTransIds: firstTicket.groupTransIds,
          isMerged: true
      };
      
      const newPrice = tickets.reduce((acc, val, index) => {
          return acc + val.price;
      }, 0);
              
      newTicket.price = newPrice;
      
      const newTransId = this.generateUniqueId();
      
      this.tickets[newTransId] = newTicket;
      
      console.log('tickets', this.tickets)
      
      // transIds.forEach(id => delete this.tickets[id]);
      
      return newTransId;
  }

  // TODO: Implement the splitTicket method to split a ticket into multiple smaller ticket entities.
  splitTicket(transId, numSplits) {
      // Implementation here
      
      const ticket = this.tickets[transId];
      const splitPrice = ticket.price / numSplits;
      
      [...Array(numSplits).keys()].forEach((split) => {
          const newTransactionId = this.generateUniqueId();
          
          this.tickets[newTransactionId] = {
              journeyId: ticket.journeyId,
              isGroup: ticket.isGroup,
              groupTransIds: ticket.groupTransIds,
              isMerged: false,
              price: splitPrice
          }
      });
  }
}

module.exports = TicketManagementSystem;