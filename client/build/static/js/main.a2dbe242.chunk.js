(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0], {42: function(e, t, a) {
  e.exports=a(76);
}, 73: function(e, t, a) {}, 76: function(e, t, a) {
  'use strict'; a.r(t); const n=a(0); const r=a.n(n); const l=a(15); const c=a.n(l); const o=a(38); const m=a(2); const i=a(10); const s=a(8); const u=a(35); const d=a(36); const E=a(41); const p=Object(s.combineReducers)({alert: function(e, t) {
    const a=t.type; const n=t.payload; switch (e=[], a) {
      case 'SET_ALERT': return [].concat(Object(E.a)(e), [n]); case 'REMOVE_ALERT': return e.filter((function(e) {
        return e.id!==n;
      })); default: return e;
    }
  }}); const b=[d.a]; const v=Object(s.createStore)(p, {}, Object(u.composeWithDevTools)(s.applyMiddleware.apply(void 0, b))); const h=a(17); const f=a(13); const g=a(40); const w=a(14); const y=a.n(w); const O=a(19); const j=a(20); const N=a.n(j); const T=a(37); const x=function(e, t) {
    const a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3; return function(n) {
      const r=Object(T.v4)(); n({type: 'SET_ALERT', payload: {msg: e, alertType: t, id: r}}), setTimeout((function() {
        return n({type: 'REMOVE_ALERT', payload: r});
      }), a);
    };
  }; const R=Object(i.b)((function(e) {
    return {alerts: e.alert};
  }))((function(e) {
    const t=e.alerts; return null!==t&&t.length>0&&t.map((function(e) {
      return r.a.createElement('div', {'key': e.id, 'data-testid': 'alerts', 'className': 'alert alert-'.concat(e.alertType)}, e.msg);
    }));
  })); const F=Object(i.b)(null, {eventForm: function(e) {
    return function() {
      const t=Object(O.a)(y.a.mark((function t(a) {
        let n; let r; return y.a.wrap((function(t) {
          for (;;) {
            switch (t.prev=t.next) {
              case 0: return n={headers: {'Content-Type': 'application/json'}}, t.prev=1, t.next=4, N.a.post('/forms/EventForm', e, n); case 4: r=t.sent, a({type: 'FORM_SEND', payload: r.data}), a(x('Message send', 'success')), t.next=12; break; case 9: t.prev=9, t.t0=t.catch(1), a({type: 'FORM_ERROR', payload: {msg: t.t0.statusText, status: t.t0.status}}); case 12: case 'end': return t.stop();
            }
          }
        }), t, null, [[1, 9]]);
      }))); return function(e) {
        return t.apply(this, arguments);
      };
    }();
  }})((function(e) {
    const t=e.eventForm; const a=(new Date).toISOString().substring(0, 10); const l=Object(n.useState)({name: '', nameError: '', surname: '', surnameError: '', email: '', emailError: '', date: '', dateError: '', formName: 'Brainhub Event', subject: 'Register confirmation'}); const c=Object(g.a)(l, 2); const o=c[0]; const m=c[1]; const i=function(e) {
      m(Object(f.a)(Object(f.a)({}, o), {}, Object(h.a)({}, e.target.name, e.target.value)));
    }; return r.a.createElement('div', {className: 'fullSide'}, r.a.createElement('div', {className: 'main-container'}, r.a.createElement('section', {className: 'formTemplate'}, r.a.createElement('article', null, r.a.createElement('div', {className: 'headerText'}, r.a.createElement('h3', null, 'Brainhub Event'), r.a.createElement('h1', null, 'Let\'s register to next event!')), r.a.createElement('form', {'data-testid': 'form', 'className': 'mainForm', 'onSubmit': function(e) {
      e.preventDefault(), function() {
        let e=''; let t=''; let a=''; let n=''; return (!o.name||o.name.length<2)&&(e='Name cannot be blank'), o.surname||(a='Surname cannot be blank'), /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(o.email)||(t='Email is not valid'), o.date||(n='Date cannot be blank'), !(e||a||t||n)||(m(Object(f.a)(Object(f.a)({}, o), {}, {nameError: e, surnameError: a, emailError: t, dateError: n})), !1);
      }()&&(t(o), m({}), setTimeout((function() {
        window.location.reload();
      }), 3e3));
    }}, r.a.createElement('div', {className: 'double-box'}, r.a.createElement('div', {className: 'inline-box'}, r.a.createElement('label', {htmlFor: 'name'}, 'First name'), r.a.createElement('input', {type: 'text', placeholder: 'Name', name: 'name', onChange: i, required: !0}), r.a.createElement('div', {className: 'wrong-data'}, o.nameError)), r.a.createElement('div', {className: 'inline-box'}, r.a.createElement('label', {htmlFor: 'surname'}, 'Last name'), r.a.createElement('input', {type: 'text', placeholder: 'Surname', name: 'surname', onChange: i, required: !0}), r.a.createElement('div', {className: 'wrong-data'}, o.surnameError))), r.a.createElement('label', {htmlFor: 'email'}, 'E-mail Adress'), r.a.createElement('input', {type: 'email', placeholder: 'Email', name: 'email', onChange: i, required: !0}), r.a.createElement('div', {className: 'wrong-data'}, o.emailError), r.a.createElement('label', {htmlFor: 'date'}, 'Event date'), r.a.createElement('input', {'data-testid': 'date', 'type': 'date', 'name': 'date', 'min': a, 'max': '2099-12-31', 'onChange': i, 'required': !0}), r.a.createElement('div', {className: 'wrong-data'}, o.dateError), r.a.createElement(R, null), r.a.createElement('input', {'id': 'submit', 'data-testid': 'send', 'type': 'submit', 'value': 'Send'}))))));
  })); const S=(a(73), function() {
    return r.a.createElement(i.a, {store: v}, r.a.createElement(o.a, null, r.a.createElement(n.Fragment, null, r.a.createElement('main', null, r.a.createElement(m.c, null, r.a.createElement(m.a, {exact: !0, path: '/', component: F}))))));
  }); Boolean('localhost'===window.location.hostname||'[::1]'===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); c.a.render(r.a.createElement(S, null), document.getElementById('root')), 'serviceWorker'in navigator&&navigator.serviceWorker.ready.then((function(e) {
    e.unregister();
  })).catch((function(e) {
    console.error(e.message);
  }));
}}, [[42, 1, 2]]]);
// # sourceMappingURL=main.a2dbe242.chunk.js.map
