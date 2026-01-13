import { useEffect, useState } from "react";

export const InputField = ({ placeholder, value, onChange, name }) => {
  return (
    <input
      placeholder={placeholder}
      className="border border-zinc-200 p-2 rounded-md w-full"
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export const SearchableDropdown = ({
  users,
  selectedCompany,
  onSelect,
  setCompanyId,
  setCompanyLocationId,
  setCompanyLocation,
}) => {
  const [searchTerm, setSearchTerm] = useState();
  const [filteredOptions, setFilteredOptions] = useState(users);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSearchTerm(selectedCompany ? selectedCompany : "");
  }, [selectedCompany]);

  useEffect(() => {
    setFilteredOptions(
      searchTerm && searchTerm && users
        ? users.filter(
            (user) =>
              user.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              user.clientName?.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : users
    );
  }, [searchTerm, users]);

  const handleSelect = (user) => {
    setSearchTerm(user.company);
    onSelect(user.company);
    setCompanyLocation(
      `${user.address}, ${user.city}, ${user?.state} ${user.zipCode}`
    );

    setIsOpen(false);
    // console.log(user.company);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("e.target.value",e.target.value)
    setIsOpen(true);
  };
  console.log("searchTerm", filteredOptions);
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="py-2 border rounded-md px-2 capita lize w-full"
        value={searchTerm}
        onChange={handleInputChange}
        onClick={() => setIsOpen(true)}
        placeholder="Select a Company"
      />
      {searchTerm && isOpen && (
        <ul className="absolute z-10 border rounded-md mt-1 bg-white w-full max-h-60 overflow-auto text-nowrap">
          {users && filteredOptions && filteredOptions.length > 0 ? (
            filteredOptions.map((user, index) => (
              <li
                key={index}
                // className='py-2 px-4 hover:bg-gray-200 cursor-pointer flex flex-col'
                onClick={() => {
                  handleSelect(user);
                  setCompanyId(user.id);
                }}
              >
                <div
                  key={index}
                  className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex flex-col"
                  onClick={() => {
                    setCompanyLocationId(user.id);
                    setCompanyLocation(
                      `${user.address}, ${user.city}, ${user?.state} ${user.zipCode}`
                    );
                  }}
                >
                  <p className="font-semibold">{user?.company}</p>
                  <p className="text-sm text-zinc-400">
                    {user.address}, {user.city}, {user?.state} {user.zipCode}
                  </p>
                </div>
              </li>
            ))
          ) : (
            <li className="py-2 px-4">No options found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export const Button = ({
  onClick,
  label,
  additionalClasses = "",
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`border p-2 px-5 rounded-md flex items-center gap-1 font-semibold ${additionalClasses}`}
    >
      {children}
      {label}
    </button>
  );
};
