import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { createuserapi, deleteuserapi, getuserapi, updateuserapi } from '../service/api'

const EmployeeCards = () => {
  const [users, setUsers] = useState([])

  const [newUser, setNewUser] = useState({ name: '', email: '', empId: '' })
  const [isEdit, setIsEdit] = useState(false)
  const [userid, setUserId] = useState('')

  async function getUserData() {
    try {
      const response = await axios.get(getuserapi)
      setUsers(response.data.user || [])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  function changeHandler(e) {
    const { name, value } = e.target
    setNewUser(prev => ({ ...prev, [name]: value }))
  }

  async function createUser() {
    try {
      await axios.post(createuserapi, newUser)
      await getUserData()
      setNewUser({ name: '', email: '', empId: '' })
      setIsEdit(false)
    } catch (error) {
      console.log(error)
    }
  }

  async function updatedUser() {
    try {
      await axios.put(`${updateuserapi}/${userid}`, newUser)
      await getUserData()
      setNewUser({ name: '', email: '', empId: '' })
      setIsEdit(false)
      setUserId('')
    } catch (error) {
      console.log(error)
    }
  }

  function submitHandler(e) {
    e.preventDefault()
    if (isEdit) updatedUser()
    else createUser()
  }

  async function deleteHandler(id) {
    try {
      await axios.delete(`${deleteuserapi}/${id}`)
      await getUserData()
    } catch (error) {
      console.log(error)
    }
  }

  function editHandler(id) {
    const found = users.find(u => u._id === id || u.id === id)
    if (found) {
      setNewUser({ name: found.name || '', email: found.email || '', empId: found.empId || '' })
      setUserId(id)
      setIsEdit(true)
    }
  }

  const styles = {
    container: { padding: 18, maxWidth: 980, margin: '32px auto', fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial' },
    title: { fontSize: 22, margin: '0 0 12px 0', color: '#4f46e5' },
    form: { display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18, width: 400, maxWidth: '100%', background: '#fff', padding: 18, borderRadius: 12, boxShadow: '0 6px 18px rgba(15,23,42,0.06)' },
    input: { padding: '8px 10px', borderRadius: 8, border: '1px solid #e6e9f2', width: '100%' },
    submit: { padding: '8px 12px', borderRadius: 10, border: 'none', background: '#4f46e5', color: '#fff', cursor: 'pointer', width: 120 },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 },
    card: { background: '#fff', padding: 14, borderRadius: 12, boxShadow: '0 6px 18px rgba(15,23,42,0.06)', display: 'flex', gap: 12, alignItems: 'center' },
    avatar: { width: 56, height: 56, borderRadius: 10, background: 'linear-gradient(135deg,#c7d2fe,#a78bfa)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 },
    info: { flex: 1 },
    name: { margin: 0, fontWeight: 700 },
    role: { margin: '6px 0 0 0', color: '#6b7280' },
    actions: { display: 'flex', gap: 8, marginTop: 8 },
    smallBtn: { padding: '6px 10px', borderRadius: 8, border: '1px solid rgba(79,70,229,0.08)', background: '#fff', color: '#4f46e5', cursor: 'pointer' }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Employee System App</h1>

      <form style={styles.form} onSubmit={submitHandler}>
        <input style={styles.input} value={newUser.name} onChange={changeHandler} name='name' placeholder='Name' />
        <input style={styles.input} value={newUser.email} onChange={changeHandler} name='email' placeholder='Email' />
        <input style={styles.input} value={newUser.empId} onChange={changeHandler} name='empId' placeholder='Emp. Id' />
        <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
          <button style={styles.submit} type='submit'>{isEdit ? 'Update' : 'Create'}</button>
          {isEdit && <button type='button' style={{ ...styles.smallBtn, border: '1px solid #e5e7eb' }} onClick={() => { setIsEdit(false); setNewUser({ name: '', email: '', empId: '' }); setUserId('') }}>Cancel</button>}
        </div>
      </form>

      <div style={styles.grid}>
        {users.map((item) => (
          <div style={styles.card} key={item._id || item.id}>
            <div style={styles.avatar}>{(item.name || 'U').slice(0, 2).toUpperCase()}</div>
            <div style={styles.info}>
              <p style={styles.name}>{item.name}</p>
              <p style={styles.role}>{item.email} • {item.empId}</p>
              <div style={styles.actions}>
                <button style={{ ...styles.smallBtn, background: '#ef4444', color: '#fff', border: 'none' }} onClick={() => deleteHandler(item._id || item.id)}>Delete</button>
                <button style={styles.smallBtn} onClick={() => editHandler(item._id || item.id)}>Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmployeeCards